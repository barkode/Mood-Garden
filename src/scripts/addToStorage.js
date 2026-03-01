import { moodStorage } from "../storage.js";

const items = [ {
    "date": "2026-02-28", "mood": "motivated", "note": "Relaxing evening"
}, {
    "date": "2026-02-27", "mood": "motivated", "note": "Feeling overwhelmed"
}, {
    "date": "2026-02-26", "mood": "sad", "note": "Had a long meeting"
}, {
    "date": "2026-02-25", "mood": "tired", "note": "Read a good book"
}, {
    "date": "2026-02-24", "mood": "tired", "note": "Feeling overwhelmed"
}, {
    "date": "2026-02-23", "mood": "happy", "note": "Read a good book"
}, {
    "date": "2026-02-22", "mood": "bored", "note": "Took a nap"
}, {
    "date": "2026-02-21", "mood": "sad", "note": "Meditated in the morning"
}, {
    "date": "2026-02-20", "mood": "stressed", "note": "Feeling creative"
}, {
    "date": "2026-02-19", "mood": "sad", "note": "Feeling grateful"
}, {
    "date": "2026-02-18", "mood": "happy", "note": "Feeling grateful"
}, {
    "date": "2026-02-17", "mood": "excited", "note": "Feeling grateful"
}, {
    "date": "2026-02-16", "mood": "grateful", "note": "Had a long meeting"
}, {
    "date": "2026-02-15", "mood": "motivated", "note": "Tried something new"
}, {
    "date": "2026-02-14", "mood": "excited", "note": "Caught up with friends"
}, {
    "date": "2026-02-13", "mood": "excited", "note": "Feeling a bit down"
}, {
    "date": "2026-02-12", "mood": "stressed", "note": "Read a good book"
}, {
    "date": "2026-02-11", "mood": "happy", "note": "Caught up with friends"
}, {
    "date": "2026-02-10", "mood": "grateful", "note": "Feeling a bit down"
}, {
    "date": "2026-02-09", "mood": "motivated", "note": "Productive day at work"
}, {
    "date": "2026-02-08", "mood": "calm", "note": "Watched a movie"
}, {
    "date": "2026-02-07", "mood": "tired", "note": "Worked late"
}, {
    "date": "2026-02-06", "mood": "excited", "note": "Caught up with friends"
}, {
    "date": "2026-02-05", "mood": "bored", "note": "Enjoyed a walk outside"
}, {
    "date": "2026-02-04", "mood": "grateful", "note": "Had a great coffee"
}, {
    "date": "2026-02-03", "mood": "calm", "note": "Feeling overwhelmed"
}, {
    "date": "2026-02-02", "mood": "grateful", "note": "Finished a big task"
}, {
    "date": "2026-02-01", "mood": "stressed", "note": "Took a nap"
}, {
    "date": "2026-01-31", "mood": "grateful", "note": "Feeling inspired"
}, {
    "date": "2026-01-29", "mood": "happy", "note": "Took a nap"
} ];
moodStorage.init();
items.forEach(item => moodStorage.saveEntry(item));
console.log(`Додано ${items.length} записів.`);