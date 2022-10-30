import React, { FC } from "react";

const iFrameSettings: FC<any> = ({ data, setData }) => (
  <div className="CssSettings">
    <label>
      CSS Snippet
      <textarea
        rows={3}
        style={{ fontFamily: "monospace" }}
        value={data.input}
        onChange={(event) => setData({ input: event.target.value })}
      />
    </label>

    <p className="info">
      Warning: this functionality is intended for advanced users. Custom styles
      may break at any time.
    </p>
  </div>
);

export default iFrameSettings;
