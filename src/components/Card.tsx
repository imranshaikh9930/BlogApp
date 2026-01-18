import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge"

interface BlogCardProps {
  title: string;
  description: string;
  category: string[];
  date: string;
  coverImage: string;
  onClick:()=> void;
  isActive?: boolean;

}

export function BlogCard({
  title,
  description,
  category,
  date,
  coverImage,
  onClick,
  isActive
}: BlogCardProps) {
  return (
    <Card 
    className={`border  rounded-lg p-4 cursor-pointer transition flex flex-col lg:flex-row overflow-hidden mt-4
        ${isActive  ? "border-blue-500 bg-gray-50" : "hover:bg-gray-50"}
      `}
    onClick={onClick}>
      {/* Image */}
      <div
        className="h-48 lg:h-auto lg:w-48 bg-cover bg-center"
       
        style={{ backgroundImage: `url(${coverImage})` }}
      />

      {/* Content */}
      <CardContent className="flex flex-col justify-between p-4">
        <div className="space-y-2">
          {/* Category + Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {category.map((cat) => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
            <span>• {new Date(date).toDateString()}</span>
          </div>

         
          <h2 className="text-xl font-bold text-foreground">
            {title}
          </h2>

        
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
