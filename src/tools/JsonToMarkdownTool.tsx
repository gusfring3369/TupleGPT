import { useState } from "react";
import { Button } from "@/components/ui/button";

const formatCell = (value: unknown) => {
  if (value === null) return "null";
  if (value === undefined) return "";
  const text = typeof value === "object" ? JSON.stringify(value) : String(value);
  return text.replace(/\|/g, "\\|").replace(/\n/g, "<br/>");
};

const toMarkdownTable = (headers: string[], rows: string[][]) => {
  const headerRow = `| ${headers.join(" | ")} |`;
  const divider = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${row.join(" | ")} |`).join("\n");
  return [headerRow, divider, body].filter(Boolean).join("\n");
};

const jsonToMarkdown = (value: unknown) => {
  if (Array.isArray(value)) {
    if (value.every((item) => Array.isArray(item))) {
      const maxCols = Math.max(
        0,
        ...value.map((row) => (Array.isArray(row) ? row.length : 0))
      );
      const headers = Array.from({ length: maxCols }, (_, i) => `Col ${i + 1}`);
      const rows = value.map((row) =>
        headers.map((_, i) => formatCell((row as unknown[])[i]))
      );
      return toMarkdownTable(headers, rows);
    }

    const allObjects = value.every(
      (item) => typeof item === "object" && item !== null && !Array.isArray(item)
    );
    if (allObjects) {
      const headerSet = new Set<string>();
      value.forEach((item) =>
        Object.keys(item as Record<string, unknown>).forEach((key) =>
          headerSet.add(key)
        )
      );
      const headers = Array.from(headerSet);
      const rows = value.map((item) =>
        headers.map((key) => formatCell((item as Record<string, unknown>)[key]))
      );
      return toMarkdownTable(headers, rows);
    }

    return value.map((item) => `- ${formatCell(item)}`).join("\n");
  }

  if (typeof value === "object" && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>);
    const rows = entries.map(([key, val]) => [formatCell(key), formatCell(val)]);
    return toMarkdownTable(["Key", "Value"], rows);
  }

  return formatCell(value);
};

export default function JsonToMarkdownTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-secondary/20 p-6">
        <h2 className="text-xl font-bold mb-4">JSON input</h2>
        <textarea
          className="w-full min-h-[280px] rounded-lg border border-border bg-background p-4 text-sm"
          placeholder='Paste JSON here (object or array)'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
        <div className="mt-4 flex items-center gap-3">
          <Button
            onClick={() => {
              setError("");
              try {
                const parsed = JSON.parse(input || "null");
                setOutput(jsonToMarkdown(parsed));
              } catch (err) {
                setOutput("");
                setError("Invalid JSON. Please fix the input and try again.");
              }
            }}
          >
            Convert to Markdown
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setInput("");
              setOutput("");
              setError("");
            }}
          >
            Clear
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-secondary/20 p-6">
        <h2 className="text-xl font-bold mb-4">Markdown output</h2>
        <textarea
          className="w-full min-h-[280px] rounded-lg border border-border bg-background p-4 text-sm"
          value={output}
          readOnly
          placeholder="Markdown output will appear here"
        />
      </div>
    </div>
  );
}
