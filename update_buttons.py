import os
import re

css_dir = r"c:\Users\Yasir\Documents\Portfolio-website\assets\css"
files = ["style.css", "portfolio.css", "about.css", "blog.css"]

replacement = """    /* ── BUTTONS ── */
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 11px 22px; border-radius: 100px; font-size: 14px; font-weight: 500;
      text-decoration: none; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer;
      border: none; outline: none; white-space: nowrap;
      position: relative; overflow: hidden;
      z-index: 1;
    }
    .btn::before {
      content: '';
      position: absolute; top: 50%; left: 50%;
      width: 150%; height: 150%;
      background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%);
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s;
      border-radius: 50%;
      z-index: -1; pointer-events: none;
    }
    .btn:hover::before {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    .btn-primary {
      background: var(--accent); color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
      border: 1px solid transparent;
    }
    .btn-primary:hover {
      background: var(--accent-2);
      box-shadow: 0 10px 25px -5px rgba(0, 168, 107, 0.4), 0 8px 10px -6px rgba(0, 168, 107, 0.2);
      transform: translateY(-3px) scale(1.02);
    }
    .btn-ghost {
      background: transparent; color: rgba(240,242,245,0.7);
      border: 1px solid rgba(240,242,245,0.2);
    }
    .btn-ghost:hover { 
      border-color: rgba(240,242,245,0.5); color: rgba(255,255,255,1); background: rgba(255,255,255,0.05); 
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 20px -6px rgba(0,0,0,0.2);
    }
    .btn-lg { padding: 14px 28px; font-size: 15px; border-radius: 100px; }
    .btn-outline {
      background: var(--bg-card); color: var(--text);
      border: 1px solid var(--border-hover);
    }
    .btn-outline:hover { 
      background: var(--bg-3);
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2);
    }
    .btn svg { width: 15px; height: 15px; flex-shrink: 0; }"""

pattern = re.compile(r"/\* ── BUTTONS ── \*/.*?\.btn svg \{ width: 15px; height: 15px; flex-shrink: 0; \}", re.DOTALL)

for fname in files:
    path = os.path.join(css_dir, fname)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
            
        if pattern.search(content):
            new_content = pattern.sub(replacement, content)
            with open(path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {fname}")
        else:
            print(f"Pattern not found in {fname}")
