import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface Post {
  id: string;
  title: string;
  content: string;
  author_name: string;
  tags: string[];
  likes: number;
  created_at: string;
  user_id: string;
}

const tagColors: Record<string, string> = {
  SNAP: "bg-snap/10 text-snap",
  Deals: "bg-savings/10 text-savings",
  "Budget Tips": "bg-primary/10 text-primary",
  "Chef Tips": "bg-accent/10 text-accent",
};

const allTags = ["SNAP", "Deals", "Budget Tips", "Chef Tips"];

const Blog = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filter, setFilter] = useState<string | null>(null);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setPosts(data);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);

  const submitPost = async () => {
    if (!title.trim() || !content.trim() || !user) return;
    const { data, error } = await supabase
      .from("blog_posts")
      .insert({
        user_id: user.id,
        title: title.trim(),
        content: content.trim(),
        author_name: user.email?.split("@")[0] || "Anonymous",
        tags: selectedTags.length > 0 ? selectedTags : ["Budget Tips"],
      })
      .select()
      .single();

    if (data) setPosts((prev) => [data, ...prev]);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    setTitle(""); setContent(""); setSelectedTags([]); setOpen(false);
  };

  const likePost = async (id: string) => {
    const post = posts.find((p) => p.id === id);
    if (!post) return;
    const { error } = await supabase.from("blog_posts").update({ likes: post.likes + 1 }).eq("id", id);
    if (!error) setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)));
  };

  const filtered = filter ? posts.filter((p) => p.tags.includes(filter)) : posts;

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold">Community Blog</h1>
          <p className="mt-1 text-muted-foreground">Tips on cheap stores, SNAP benefits & good deals</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button className="gap-2"><Plus className="h-4 w-4" /> New Post</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle className="font-display">Create a Post</DialogTitle></DialogHeader>
            <div className="space-y-4 mt-2">
              <Input placeholder="Post title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <Textarea placeholder="Share your tips, deals, or experiences..." value={content} onChange={(e) => setContent(e.target.value)} rows={5} />
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Tags</p>
                <div className="flex gap-2 flex-wrap">
                  {allTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className={`cursor-pointer transition-colors ${selectedTags.includes(tag) ? tagColors[tag] || "" : "opacity-50"}`} onClick={() => toggleTag(tag)}>{tag}</Badge>
                  ))}
                </div>
              </div>
              <Button onClick={submitPost} disabled={!title.trim() || !content.trim()} className="w-full">Publish Post</Button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      <div className="mt-6 flex gap-2 flex-wrap">
        <Badge variant="secondary" className={`cursor-pointer ${!filter ? "bg-primary/10 text-primary" : "opacity-60"}`} onClick={() => setFilter(null)}>All</Badge>
        {allTags.map((tag) => (
          <Badge key={tag} variant="secondary" className={`cursor-pointer transition-colors ${filter === tag ? tagColors[tag] || "" : "opacity-60"}`} onClick={() => setFilter(filter === tag ? null : tag)}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {loading ? (
          <div className="text-center text-muted-foreground py-12">Loading posts...</div>
        ) : filtered.map((post, i) => (
          <motion.article key={post.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">By {post.author_name} • {new Date(post.created_at).toLocaleDateString()}</p>
              </div>
              <button onClick={() => likePost(post.id)} className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-destructive/10 hover:text-destructive">
                <Heart className="h-4 w-4" />{post.likes}
              </button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.content}</p>
            <div className="mt-3 flex gap-2">
              {post.tags.map((tag) => (<Badge key={tag} variant="secondary" className={tagColors[tag] || ""}>{tag}</Badge>))}
            </div>
          </motion.article>
        ))}
        {!loading && filtered.length === 0 && <div className="text-center text-muted-foreground py-12">No posts yet. Be the first to share!</div>}
      </div>
    </div>
  );
};

export default Blog;
