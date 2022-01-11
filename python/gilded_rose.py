class Item:
    def __init__(self, name, sell_in, quality):
        self.name = name  # item name
        self.sell_in = sell_in  # days left for item to be sold
        self.quality = quality  # number of items left

    def __repr__(self):
        return f"Item(name={self.name} sell_in={self.sell_in}, quality={self.quality})"

    def __str__(self):
        return "%s, %s, %s" % (self.name, self.sell_in, self.quality)


class GildedRose(object):
    def __init__(self, items):
        self.items = items

    # /!\ Do not change code above this line /!\ #

    def update_quality(self):
        for item in self.items:
            if (
                    item.name != "Aged Brie"
                    and item.name != "Backstage passes to a TAFKAL80ETC concert"
            ):
                if self.checkQualityGreaterThanZero(item):
                    if self.checkIfNotSulphuras(item):
                        self.decreaseItemQuality(item)
            else:
                if item.quality < 50:
                    self.increaseItemQuality(item)
                    if item.name == "Backstage passes to a TAFKAL80ETC concert":
                        self.backstageTickets(item)

            if self.checkIfNotSulphuras(item):
                self.decreaseSellIn(item)
            if item.sell_in < 0:
                self.resetItem(item)
       

    def checkQualityGreaterThanZero(self, item):
        if item.quality > 0:
            return True
        return False


    def increaseItemQuality(self, item):
        item.quality = item.quality+ 1
        # return item.quality

    def decreaseItemQuality(self, item):
        item.quality = item.quality- 1

    def decreaseSellIn(self, item):
        item.sell_in -= 1

    def checkIfNotSulphuras(self, item):
        if item.name != "Sulfuras, Hand of Ragnaros":
            return True
        return False

    def backstageTickets(self, item): # find a better name
        if item.sell_in < 11:
            if item.quality < 50:
                self.increaseItemQuality(item)

        if item.sell_in < 6:
            if item.quality < 50:
                self.increaseItemQuality(item)

    def resetItem(self, item):
        if item.name != "Aged Brie":

            if item.name != "Backstage passes to a TAFKAL80ETC concert":
                if self.checkQualityGreaterThanZero(item):
                    if self.checkIfNotSulphuras(item):
                        self.decreaseItemQuality(item)
            else:
                item.quality = item.quality - item.quality
        else:
            if item.quality < 50:
                self.increaseItemQuality(item)

if __name__ == "__main__":
    main()
