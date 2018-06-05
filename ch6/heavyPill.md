### You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle? You can only use the scale once. 

Questions: What defines a 'use'? If I place all 20 on a scale and read the reading, this is clearly one use. If I then pull one bottle off the scale, is this another use, or still the same use? Do the bottles have labels (haha)?

Observations: We don't know how many pills are in each bottle. The problem doesn't actually state the bottles with 1.0 gram pills are of equal weights / pill counts, though it does reference "the heavy bottle". 

More questions: Are the 1.0 gram bottles of equal weights? The heavy bottle means the one containing the 1.1 gram pills, correct? Meaning, there isn't a heavier bottle with 1.0 gram pills?

### Solution: 

You weigh the pills from each bottle in varying but ordered quantities. If we weigh 1 pill from bottle 1, 2 from bottle 2, 3 from bottle 3 ... 20 from bottle 20, we can find which bottle the variance in weight came from. 

In this way, we will weigh 1 + 2 + 3 + 4 ... + 20 = 210 pills. If they were all 1.0 gram, this would give 210 grams. By doing Total Weight - 210 we will get the amount of .1 gram variances, which equals the bottle number. So the equation is: 

Bottle Number = (Total Weight - 210) / .1