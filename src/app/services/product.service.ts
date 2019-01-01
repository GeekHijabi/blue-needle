import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductsService {
  public getProducts() {
    return of(this.products());
  }

  public getProduct(id: number) {
    return this
      .products()
      .find((product) => {
        return product.id === id;
      });
  }

  private products() {
    return [
      {
        id: 1,
        name: 'Tha Vape Flex Attire',
        description: 'A particular description of the whole attire goes right in this space below the product name',
        materials: '92% Cotton, 7% Silk, 1% Rubber',
        img: 'https://res.cloudinary.com/geek-hijabi/image/upload/v1517946404/photo-1490731727228-d56f39758d0e_sguijm.jpg'
      },
      {
        id: 2,
        name: 'Anotha Flex Attire',
        description: 'A particular description of the whole attire goes right in this space below the product name',
        materials: '92% Cotton, 7% Silk, 10% crepe',
        img: 'https://res.cloudinary.com/geek-hijabi/image/upload/v1518132491/food_ai76y8.jpg'
      },
      {
        id: 3,
        name: 'Tha Bomb Attire',
        description: 'A particular description of the whole attire goes right in this space below the product name',
        materials: '92% Cotton, 1% Rubber',
        img: 'https://res.cloudinary.com/geek-hijabi/image/upload/v1517785585/yam-peppersoup_cdkjnt.jpg'
      },
      {
        id: 4,
        name: 'Tha Vape Flex Attire',
        description: 'A particular description of the whole attire goes right in this space below the product name',
        materials: '92% Cotton, 7% Silk, 1% Rubber',
        img: 'https://res.cloudinary.com/geek-hijabi/image/upload/v1516635198/Grilled_Beef_and_Veggie_Bowl_800_482_85_s_c1_jk4cno.jpg'
      },
      {
        id: 5,
        productName: 'Tha Bomb Attire',
        description: 'A particular description of the whole attire goes right in this space below the product name',
        materials: '92% Cotton, 1% Rubber',
        img: 'https://res.cloudinary.com/geek-hijabi/image/upload/v1520270057/book3_bj190e.jpg'
      },
      {
        id: 6,
        name: 'Anotha Flex Attire',
        description: 'A particular description of the whole attire goes right in this space below the product name',
        materials: '92% Cotton, 7% Silk, 10% crepe',
        img: 'https://res.cloudinary.com/geek-hijabi/image/upload/v1520270062/book5_ukgrtr.jpg'
      },
    ]
  }
}

