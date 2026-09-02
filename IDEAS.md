# 20 profile readme ideas

all of them pay homage to cyros (cyra.locs.in): the terminal on water, the
channels, the chips, the fish. github readmes get markdown plus a small html
subset, no css, no js. anything that moves is either an svg image or a github
action rewriting the file on a schedule. "needs" says which.

ideas with a worked example in `examples/` are marked.

---

**01 · boot sequence** &nbsp; `examples/01-boot-sequence.md`
the readme is the boot log: mounting field, compiling glsl, seeding noise,
measuring tide, opening channel. lands on the bio, ends on the prompt.
needs: nothing.

**02 · channels** &nbsp; `examples/02-channels.md`
the whole site mirrored as six numbered sections behind a channel rail
(01 hello · 02 now · 03 works ...), with the dithered water banner on top.
the most complete one. needs: nothing (banner svgs in `assets/`).

**03 · help** &nbsp; `examples/03-help.md`
the readme is the output of `> help`. every command is a line of bio or a
link. `sudo: the water does not take orders`. needs: nothing.

**04 · readouts** &nbsp; `examples/04-readouts.md`
sonar, sea, clock and field chips in a row, then the big fish with a saying.
needs: nothing static; see 05/06/14 to make the chips live.

**05 · static shell** &nbsp; `examples/05-static-shell.md`
the no-js crawler shell of the site, verbatim. "you are seeing the static
shell. the water is at cyra.locs.in." three lines. needs: nothing.

---

**06 · fish of the day**
the `><(((°>` fish with one of the rack's eighteen sayings, re-rolled by a
cron action once a day. same rule as the site: one saying per visit, never
cycling while you look at it. needs: action (cron, sed, commit).

**07 · sonar · contact**
the sonar chip reads your latest push: `· contact` normally, `◆ contact · lg`
when the last commit touched more than N files. needs: action on `push`.

**08 · sea state**
calm / slight / moderate from commits in the last seven days, same words the
site's sea chip uses. needs: action (cron, github api).

**09 · now chip, live**
the `hearing` row pulls your last scrobble from last.fm (zra already speaks
that api). `building` stays hand-written. needs: action + last.fm key secret.

**10 · notes feed**
the four newest posts from cyra.locs.in/rss.xml as the notes channel.
needs: action (cron, fetch rss, rewrite a marked block).

**11 · clock chip**
`awst · 14:32 · perth` plus a hand-written weather line ("41 degrees up
there"). needs: action (cron, hourly).

---

**12 · frequency masthead**
just `140.85 mhz` and a static dithered wave svg, then the bio. the masthead
of the rack with nothing under it. needs: nothing (`assets/water-*.svg`).

**13 · cfg panel**
the "cyra" sea preset rendered as ascii sliders, presented as a spec sheet of
a person: `soften ▮▮▮▮▮▮▮▮▯▯ .84`, `chop ▯▯▯▯▯▯▯▯▯▯ .03`, `flow ▮▯▯▯ .10`.
needs: nothing.

**14 · sea presets**
three moods, `sea cyra` / `sea deep` / `sea riso`, each a one-liner of what
you are like in that state. needs: nothing.

**15 · whoami**
the site's `whoami` output, five lines, ending "you are a guest on a terminal
that floats." needs: nothing.

**16 · ls works**
`ls -la ~/works` output: lang column, size column as a joke (`stak  vibe
coded, do not run`). needs: nothing.

**17 · quotes**
the quotes channel as the whole readme. testimonials from nojus, kaiwen, and
kiki the cat. a link at the bottom to send one over. needs: nothing.

**18 · standby**
the terminal has lost focus: everything dimmed, `status: standby`, one line
saying where you actually are (the site). needs: nothing.

**19 · entry card**
the CYROS wordmark as an svg in the entry card's degraded typewriter style,
jittered glyphs and a couple of torn scanlines, then nothing but the url.
needs: an svg (font must be outlined, github can't load webfonts).

**20 · the water itself**
no words. the animated dithered water banner, full width, with the fish
crossing every 38 seconds, and the url in the alt text. needs: nothing
(`assets/water-dark.svg`).

---

## the quiet ones

01 through 20 quote the site. these nod to it. the homage is the dither,
or the register, never the dialogue.

**21 · quiet** &nbsp; `examples/06-quiet.md`
the water banner, then four lines: name, place, languages, url. the banner
does all the talking. needs: `assets/water-*.svg`.

**22 · plain** &nbsp; `examples/07-plain.md`
no images. the hello paragraph, four repos with one-liners, the url. reads
like the site's static shell would if it were the whole site. needs: nothing.

**23 · now** &nbsp; `examples/08-now.md`
just the key/value table from the now channel. car, hearing, building,
place. no intro, no sign-off. needs: nothing (an action can update `hearing`).

**24 · rule** &nbsp; `examples/09-rule.md`
plain text sections split by a 6px dithered rule instead of `---`. the only
trace of the site is the divider. needs: `assets/rule-*.svg`.

**25 · water** &nbsp; `examples/10-water.md`
the banner, linked to the site, and nothing else. the url is the alt text.
needs: `assets/water-*.svg`.

**26 · one line** &nbsp; `examples/11-one-line.md`
`cyra. perth. cyra.locs.in`. needs: nothing.

**27 · wordmark** &nbsp; `examples/12-wordmark.md`
"cyra" as a 5x7 pixel face, solid up top and dissolving into dither at the
baseline, linked to the site. subtitle: `undefined`. needs:
`assets/cyra-*.svg` (generated, no font involved so it renders anywhere).

---

## picking

put the chosen example at `README.md` in the `cyra/cyra` repo, copy
`assets/` alongside if it uses the banner, push. light/dark works through
`<picture>` and `prefers-color-scheme`; github honours it.

mix freely: 01 on top of 02 is the full boot into the full site. 20 on top
of 05 is the quietest possible version.
