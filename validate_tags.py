import re
from pathlib import Path

ROOT = Path(__file__).parent
APP_HTML = ROOT / "src" / "app.html"
CONF_TS = ROOT / "src" / "conf" / "index.ts"
PATTERN = r"\{\{.*?\..*?\}\}"


def main():
    index_entries = set(re.findall(PATTERN, APP_HTML.read_text()))
    conf_entries = set(re.findall(PATTERN, CONF_TS.read_text()))
    print("app.html", index_entries)
    print("conf/index.ts", conf_entries)

    missing = [e for e in index_entries if e not in conf_entries]
    if missing:
        print(f"Please make sure {missing} are defined in conf/index.ts file")
        exit(1)


if __name__ == "__main__":
    main()
