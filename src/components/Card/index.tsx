interface Props {
  title: string;
  content: string;
}

const Card = (props: Props) => {
  const { title, content } = props;
  return (
    <div className="bg-light rounded p-2">
      <h2 className="text-start text-break">
        {title}
      </h2>
      <div className="p-2">
        <p className="text-start text-break">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Card;