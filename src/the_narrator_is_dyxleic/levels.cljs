(ns the-narrator-is-dyxleic.levels)

(def levels [
  {
    :start "bitrab"
    :target "rabbit"
    :text-before "A rabbid cabbage blocks the path. You pull a"
    :text-after " out of your hat and hurl it at the beast."
    :operations ["rotate"]}
  {
    :start "snoop"
    :target "spoon"
    :text-before "A laser unicorn stands in your way. You deflect its beam with a"
    :text-after ". Run while it's stunned!"
    :operations ["reverse" "rotate"]}
  {
    :start "tep"
    :target "steps"
    :text-before (str
                   "Jack darts forward but fails to watch where he's going. In a matter of seconds "
                   "he finds himself at the bottom of a pit. A guy named Harry eventually emerges from a dark crevice: "
                   "\"I've been here for 33 years and have been mushrooms ever since! You look like an attractive piece of meat.\" Harry charges on, but Jack ")
    :text-after " away. Hungry Harry violently hits the wall of the pit. The wall crumbles, revealing a cave."
    :operations ["reverse" "rotate" "push-s"]}
  {
    :start "yrH"
    :target "Harry"
    :text-before "Wild crocodile in the cave! In a brief moment of panic, Jack throws "
    :text-after " at the crocodile. The crocodile and Harry seem both hungry so Jack decides to leave the two alone."
    :operations ["rotate" "duplicate-last" "rr -> a"]}
  {
    :start "cellut"
    :target "carrot"
    :text-before (str
                   "Jack gets out of the cave but is stopped by a snowman guard: 'Intruders shall pay!'"
                   "Jack grabs the snowman's")
    :text-after (str
                  " nose and coal eyes and feeds them to a passing rabbit. The faceless snowman is furious and "
                  "throws Jack in a dungeon.")
    :operations ["rotate" "pop" "push-r" "rr -> a" "rrr -> o"]}
  {
    :start "fethur"
    :target "feather"
    :text-before (str
                   "Time to escape the dungeon! Jack shares the cell with a menacing skeleton."
                   "The skeleton appears to be holding a key. Jack grabs a")
    :text-after " from the pile of junk in the corner of the cell and tickles the skeleton, stealing its key."
    :operations ["reverse" "rotate" "pop" "ef -> eaf" "rh -> reh"]}
  {
    :start "asd"
    :target "tchro"
    :text-before (str
                   "The key fits and Jack's out of the cell - into a hallway. A few steps down the hallway, "
                   "a bat is attacking a weasel! Fortunately, Jack brought along a")
    :text-after (str
                  " and swings it at the bat, scaring it away. The weasel thanks Jack and asks him for a ride out."
                  "Jack agrees and the wesel climbs into Jack's pocket. A door stands at the end of the hallway.")
    :operations ["reverse" "rotate"]}
  {
    :start "asd"
    :target "wel"
    :text-before "Jack opens the door, only to reveal a sleeping Basilisk. Jack sees the "
    :text-after (str
                  " jump out of his pocket and speed towards the serpent-like creature. The Basilisk twists and turns,"
                  "passing out from the dreaded weasel odor. On the other side of the hall there's a gate.")
    :operations ["rotate" "duplicate-last" "push-as"]}
  {
    :start "mori"
    :target "mirror"
    :text-before (str
                   "The gate leads to a swamp. In the middle of the swamp, surrounded by dead bodies, "
                   "there is Cthulhu himself. Jack spots a pocket")
    :text-after (str
                  ", presumably lost by one of Cthulhu's victims. When Cthulhu attacks, Jack uses the object. "
                  "Struck by his own terrible appearance, Cthulhu implodes and dissapears.")
    :operations ["reverse" "duplicate" "pop" "rotate"]}])