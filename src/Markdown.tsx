import { useEffect } from "react";
import { useRemark } from "react-remark";

const Markdown = ({
  content,
}: {
  content: string;
}) => {
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource(content);
  }, [content,setMarkdownSource]);

  return <div>{reactContent}</div>;
};

export default Markdown;
