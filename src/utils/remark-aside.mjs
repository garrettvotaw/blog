// @ts-check
/**
 * Asides in Markdown posts.
 *
 *   I don't use VS Code anymore. :aside[Who even does?]
 *
 * renders as <span class="aside">Who even does?</span>, which global.css
 * sets off like a code comment. The comment marks are CSS-only, so RSS,
 * reader mode, search snippets and screen readers get the plain words.
 *
 * Runs after remark-directive. Any other `:word` that remark-directive
 * reads as a directive (say "TODO:fix") is put back as the text it was.
 */

/** @typedef {{ type: string, name?: string, value?: string, data?: object, children?: Node[] }} Node */

export default function remarkAside() {
  /** @param {Node} tree */
  return (tree) => walk(tree);
}

/** @param {Node} node */
function walk(node) {
  if (!node.children) return;
  node.children = node.children.flatMap((child) => {
    walk(child);
    if (child.type !== 'textDirective') return [child];
    if (child.name === 'aside') {
      child.data = { hName: 'span', hProperties: { className: ['aside'] } };
      return [child];
    }
    const label = child.children ?? [];
    return [
      { type: 'text', value: `:${child.name}` },
      ...(label.length ? [{ type: 'text', value: '[' }, ...label, { type: 'text', value: ']' }] : []),
    ];
  });
}
