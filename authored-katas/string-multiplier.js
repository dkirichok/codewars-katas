function stringMultiplier(s) {
  const reg = /\d+\([a-z]+\)/g;

  while (reg.test(s)) {
    s = s.replace(reg, (match) => {
      const [num, item] = match.slice(0, -1).split("(");
      return item.repeat(num);
    });
  }

  return s;
}