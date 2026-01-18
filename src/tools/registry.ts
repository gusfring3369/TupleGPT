import JsonToMarkdownTool from "@/tools/JsonToMarkdownTool";

export const toolRegistry: Record<string, React.ComponentType> = {
  "convert-json-to-markdown": JsonToMarkdownTool,
};
