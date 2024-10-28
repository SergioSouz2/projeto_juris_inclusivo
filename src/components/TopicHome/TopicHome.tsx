interface TopicHomeProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function TopicHome({ description, imageUrl, title }: TopicHomeProps) {
  return (
    <div className="w-[325px] flex flex-col items-center justify-center">
      <img src={imageUrl} alt={title} />
      <h2 className="text-primary font-bold text-xl mt-[46px]">{title}</h2>
      <p className="mt-[16px] text-gray-500">{description}</p>
    </div>
  );
}
