Arrr Pricer
===========

An easy, pirate-themed pricer for ye and your crew to figure out the cost of a job that you run from the terminal command-line.

##Get a price:

```

node ./index.js -p 1299.99 -s 3 -m 'food'

```

##The Basics:

  * -p = Price
  * -s = number of Staff persons needed
  * -m = type of Merchandise

##The Details

  * give a base 5% cost
  * provide for number of employees needed to complete order
    * the cost per employee is 1.2%
  * depending on the type of merch, there may be an additional cost:
    * pharm 7.5%
    * food 13%
    * electronics 2%
    * everything else, there is no markup
