function printerError(s) {
  // using regex to accept only letters a-z
  return `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
}
