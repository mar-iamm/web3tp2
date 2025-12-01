import * as Tone from "https://esm.sh/tone@15.1.22";

const btn = document.querySelector(".top-controls button");
let isPlaying = false;

const melody = [
  { time: "0:0", note: "E3" },
  { time: "0:2", note: "G3" },
  { time: "1:0", note: "A3" },
  { time: "1:2", note: "C4" },

  { time: "2:0", note: "B3" },
  { time: "2:2", note: "A3" },
  { time: "3:0", note: "G3" },
  { time: "3:2", note: "E3" },

  { time: "4:0", note: "D3" },
  { time: "4:2", note: "F3" },
  { time: "5:0", note: "A3" },
  { time: "5:2", note: "C4" },

  { time: "6:0", note: "E4" },
  { time: "6:2", note: "D4" },
  { time: "7:0", note: "A3" },
  { time: "7:2", note: "E3" }
];

const bass = [
  { time: "0:0", note: "A2" },
  { time: "2:0", note: "F2" },
  { time: "4:0", note: "D2" },
  { time: "6:0", note: "E2" }
];

let lead, low, reverb, delay;

async function startMusic() {
  await Tone.start();

  reverb = new Tone.Reverb({
    decay: 5,
    wet: 0.4
  }).toDestination();

  delay = new Tone.FeedbackDelay("8n", 0.25).connect(reverb);

  lead = new Tone.Synth({
    oscillator: { type: "triangle" },
    envelope: { attack: 0.4, release: 1.8 }
  }).connect(delay);

  low = new Tone.Synth({
    oscillator: { type: "sine" },
    envelope: { attack: 0.2, release: 2.5 }
  }).toDestination();

  Tone.Transport.cancel();
  Tone.Transport.bpm.value = 70;

  melody.forEach(ev => {
    Tone.Transport.schedule(time => {
      lead.triggerAttackRelease(ev.note, "2n", time);
    }, ev.time);
  });

  bass.forEach(ev => {
    Tone.Transport.schedule(time => {
      low.triggerAttackRelease(ev.note, "1n", time);
    }, ev.time);
  });

  Tone.Transport.loop = true;
  Tone.Transport.loopStart = "0:0";
  Tone.Transport.loopEnd = "8:0";

  Tone.Transport.start();
}

function stopMusic() {
  Tone.Transport.stop();
  Tone.Transport.cancel();
  lead.releaseAll();
  low.releaseAll();
}

btn.addEventListener("click", async () => {
  if (!isPlaying) {
    btn.innerText = "Stop";
    isPlaying = true;
    await startMusic();
  } else {
    btn.innerText = "Play";
    isPlaying = false;
    stopMusic();
  }
});
