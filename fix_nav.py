import os

html_dir = r"c:\Users\Yasir\Documents\Portfolio-website"
files = ["index.html", "about.html", "portfolio.html", "blog.html"]

for fname in files:
    path = os.path.join(html_dir, fname)
    if not os.path.exists(path):
        continue
    
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Case 1: index.html format
    if "      </div>\n  </mobile-nav>\n  </div>" in content:
        content = content.replace("      </div>\n  </mobile-nav>\n  </div>", "      </div>\n    </div>\n  </mobile-nav>")
        
    # Case 2: about.html format
    elif "    </div></mobile-nav>\n  </div>" in content:
        content = content.replace("    </div></mobile-nav>\n  </div>", "    </div>\n  </div>\n</mobile-nav>")
        
    # Case 3: another variation just in case
    elif "</div></mobile-nav>\n  </div>" in content:
        content = content.replace("</div></mobile-nav>\n  </div>", "</div>\n  </div>\n</mobile-nav>")

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Fixed {fname}")
