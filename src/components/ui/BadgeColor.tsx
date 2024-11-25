interface PropsBadgeColor {
  text: string;
  color?: string;
}

export default function BadgeColor({ color, text }: PropsBadgeColor) {
  return (
    <div className="flex gap-2">
      {text}
      <div
        className={`rounded-md w-6 h-6 ${color ? color : 'bg-success'}`}
      ></div>
    </div>
  );
}
