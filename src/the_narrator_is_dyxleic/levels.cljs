(ns the-narrator-is-dyxleic.levels)

(def levels [
  {
    :start "bitrab"
    :target "rabbit"
    :text-before "A rabbid cabbage blocks the path. You pull a"
    :text-after "out of your hat and hurl it at the beast."
    :operations ["rotate"]}
  {
    :start "noops" ; snoop
    :target "spoon"
    :text-before "A laser unicorn stands in your way. You deflect its beam with a"
    :text-after ". Run while it's stunned!"
    :operations ["reverse" "rotate" "push-a" "push-b"]}
  {
    :start "asd"
    :target "dsa"
    :text-before "Text before 3"
    :text-after "text after 3"
    :operations ["reverse"]}])