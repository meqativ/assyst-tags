args = args.join(" ").split(" ");// fix args when called from the {tag:} subtag with {args} - aka {tag:tagname|{args}}

args.flag = function (name) { return !!this.find(arg => arg.startsWith("--"+name)); }
args.get = function (name) {
    const h = this.find(arg => arg.startsWith("--"+name+"="))?.split?.("=");
    if (!h) return undefined;
    return { name: h[0].slice(2,h[0].length), value: h[1] };
}
args.filterText = function () { return this.filter(arg => arg.startsWith("--")).join(" "); }
args.filterArgs = function () { return this.filter(arg => !arg.startsWith("--")).join(" "); }
