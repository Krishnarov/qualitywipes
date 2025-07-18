"use strict";
function hs_i18n_log(n) {
  console.log("i18n_getmessage: " + n);
}
function hs_i18n_substituteStrings(n, e) {
  var s = n.match(new RegExp("\\$[0-9]+", "g"));
  if (null == s) return n;
  for (var r = 0; r < s.length; r++) {
    var l = s[r],
      t = parseInt(l.replace("$", ""));
    t <= 0 || null == e || t > e.length
      ? hs_i18n_log(
          "no substitution string at index " +
            t +
            " found for string '" +
            n +
            "'"
        )
      : (n = n.replace(l, e[t - 1]));
  }
  return n;
}
function hs_i18n_insertPlaceholders(n, e) {
  var s = n.message,
    r = s.match(new RegExp("\\$\\w+\\$", "g"));
  if (null == r) return s;
  for (var l = 0; l < r.length; l++) {
    var t = r[l],
      o = t.replace(new RegExp("\\$", "g"), "").toLowerCase(),
      a = n.placeholders[o];
    null == a && hs_i18n_log("no placeholder found for '" + o + "'");
    s = s.replace(t, a.content);
  }
  return (s = hs_i18n_substituteStrings(s, e)).replace(/\$\$/g, "$");
}
function hs_i18n_getMessage(n, e) {
  if (null == n) {
    hs_i18n_log("no messages found");
    return "";
  }
  var s = arguments[2];
  if (null == s || 0 == s.length || null == s[0]) {
    hs_i18n_log("no message name passed");
    return "";
  }
  var r = s[0],
    l = e.split("-")[0],
    t = n[e] || n[l];
  if (null == t) {
    hs_i18n_log("no messages found for language '" + e + "'");
    return "";
  }
  var o = t[r] || n[l][r];
  if (null == o) {
    hs_i18n_log("no message found for language '" + e + "' named '" + r + "'");
    return "";
  }
  return null == o.placeholders
    ? o.message || ""
    : hs_i18n_insertPlaceholders(o, s[1]);
}
