class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  /*
  /!\ Do not change code above this line /!\
  */


  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case 'Aged Brie':
          if (this.items[i].quality < 50) {
            this.incrementQuality(i)
          }
          this.decrementSellIn(i);
          if (this.items[i].sellIn < 0) {
            if (this.items[i].quality < 50) {
              this.incrementQuality(i);
            }
          }
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          if (this.items[i].quality < 50) {
            this.incrementQuality(i)
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.incrementQuality(i)
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.incrementQuality(i)
              }
            }
          }
          this.decrementSellIn(i);
          if (this.items[i].sellIn < 0) {
            this.resetQuality(i);
          }
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          if (this.items[i].quality > 0) {
            this.decrementQuality(i);
          }
          this.decrementSellIn(i);
          if (this.items[i].sellIn < 0) {
            if (this.items[i].quality > 0) {
                this.decrementQuality(i);
            }
          }
          break;
      }
    }

    return this.items;
  }

  decrementQuality(i) {
    this.items[i].quality--;
  }

  incrementQuality(i) {
    this.items[i].quality++;
  }

  resetQuality(i) {
    this.items[i].quality = 0;
  }

  decrementSellIn(i) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }
}
module.exports = {
  Item,
  Shop
}
