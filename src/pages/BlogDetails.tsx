import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface BlogDetailsProps {
  title: string;
  coverImage: string;
  category: string[];
  date: string;
  description: string;
  content: string;
  tags: string[];
}

export function BlogDetails({
  title,
  coverImage,
  category,
  date,
  description,
  content,
  tags,
}: BlogDetailsProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Cover Image */}
      <div className="w-full h-[300px] rounded-xl overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight">{title}</h1>

      {/* Category + Date */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        {category.map((cat) => (
          <Badge key={cat} variant="secondary">
            {cat}
          </Badge>
        ))}
        <span>• {new Date(date).toDateString()}</span>
      </div>

      {/* Description */}
      <p className="text-lg text-muted-foreground">
        {description}
      </p>

      <Separator />

      {/* Content */}
      <Card>
        <CardContent className="prose prose-neutral max-w-none p-6">
          <p>{content}</p>
        </CardContent>
      </Card>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-white">
        {tags.map((tag) => (
          <Badge key={tag} variant="contained">
            #{tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
