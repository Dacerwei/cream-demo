interface Props {
  title: string;
  content: string;
}

const Card = (props: Props) => {
  const { title, content } = props;
  return (
    <div className="bg-light rounded p-2">
      <h2 className="text-dark text-start">
        {title}
      </h2>
      <div className="p-2">
        <p className="text-dark text-start">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Card;