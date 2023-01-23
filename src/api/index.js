import Brand from '@/models/Brand'
import Category from '@/models/Category'

// api
import bathrooms from './brands/bathrooms'
import spawellness from './brands/spawellness'
import tiles from './brands/tiles'
import furniture from './brands/furniture'
import kitchen from './brands/kitchen'
import lighting from './brands/lighting'
import floorcoverings from './brands/floorcoverings'
import windowsdoors from './brands/windowsdoors'
import decor from './brands/decor'
import buildingmaterials from './brands/buildingmaterials'
import fireplaces from './brands/fireplaces'
import heatingcooling from './brands/heatingcooling'

import projects from './projects/projects'
import news from './projects/news'

export default {
  getProjects() {
    const items = [
      ...projects,
    ];
    return items
  },
  getNews() {
    const items = [
      ...news,
    ];
    return items
  },
  getArticles() {
    const items = [
      ...furniture,
      ...lighting,
      ...kitchen,
      ...decor,
      ...fireplaces,
      ...floorcoverings,
      ...bathrooms,
      ...tiles,
      ...spawellness,
      ...buildingmaterials,
      ...windowsdoors,
      ...heatingcooling
    ];
    return items.map((item) => {
      const brand = Brand.createFrom(item);
      return brand;
    });
  },
  getCategories() {
    const items = [
      {
        id: 4, 
        url: 'furniture',
        showroom: 2,
        title: {
          ru: 'Мебель',
          en: 'Furniture',
          it: 'Mobilia'
        }, 
        description: 'Hermitage represents and supplies some of the best Italian furnishing brands.',
        subcategory: [
          { title: 'Office furniture', url: 'office-furniture' },
          { title: 'Outdoor furniture', url: 'outdoor-furniture' },
          { title: 'Interior furniture', url: 'interior-furniture' },
          { title: 'Wardrobes', url: 'wardrobes' }
        ]
      },
      {
        id: 7, 
        url: 'floor-coverings',
        showroom: 1,
        title: {
          ru: 'Напольные покрытия',
          en: 'Floor Coverings',
          it: 'Rivestimenti per pavimenti'
        }, 
        description: 'Hermitage represents and supplies some of the best Italian flooring brands.'
      },
      {
        id: 2, 
        url: 'spa-and-wellness',
        showroom: 1,
        title: {
          ru: 'Спа и веллнесс',
          en: 'SPA & Wellness',
          it: 'SPA & Benessere'
        }, 
        description: 'Hermitage represents and supplies some of the best Italian spa and wellness brands.'
      },
      {
        id: 5, 
        url: 'kitchen',
        showroom: 2,
        title: {
          ru: 'Кухни/Бытовая техника',
          en: 'Kitchens/Appliances',
          it: 'Cucine/elettrodomestici'
        }, 
        description: 'Hermitage represents and supplies some of the best Italian kitchen brands.',
        subcategory: [
          { title: 'Kitchen', url: 'kitchen' },
          { title: 'Household appliances', url: 'household-appliences' }
        ]
      },
      {
        id: 12, 
        url: 'fireplaces',
        showroom: 2,
        title: {
          ru: 'Камины',
          en: 'Fireplaces',
          it: 'Camini'
        }, 
        description: 'Hermitage represents and supplies some of the finest Italian fireplace brands.'
      },
      {
        id: 10, 
        url: 'heating-cooling-and-ventilation',
        showroom: 1,
        title: {
          ru: 'Отопление/Охлаждение и вентиляция',
          en: 'Heating/Cooling and Ventilation',
          it: 'Riscaldamento/Raffreddamento e Ventilazione'
        }, 
        description: 'Hermitage represents and supplies some of the best Italian heating, cooling and ventilation brands.'
      },
      {
        id: 6, 
        url: 'lighting',
        showroom: 2,
        title: {
          ru: 'Освещение/Управление светом',
          en: 'Lighting/Light control',
          it: 'Illuminazione/controllo della luce'
        }, 
        description: 'Hermitage represents and supplies some of the best Italian lighting brands.'
      },
      {
        id: 1, 
        url: 'bathrooms',
        showroom: 1,
        title: {
          ru: 'Сантехника',
          en: 'Bathrooms',
          it: 'Bagni'
        }, 
        description: 'Hermitage represents and supplies some of the best Italian sanitary ware brands.'
      },
      {
        id: 9, 
        url: 'decor-and-accessories',
        showroom: 2,
        title: {
          ru: 'Декоративные материалы',
          en: 'Decor and Accessories',
          it: 'Arredamento e Accessori'
        }, 
        description: 'Hermitage represents and supplies some of the finest Italian decor and accessories brands.',
        subcategory: [
          { title: 'Wallpaper', url: 'wallpaper' },
          { title: 'Wallpanels', url: 'wallpanels' },
          { title: 'Rugs', url: 'rugs' },
          { title: 'Dishes', url: 'dishes' },
          { title: 'Textile', url: 'textile' },
          { title: 'Artificial Plants', url: 'artificial-plants' },
          { title: 'Safe', url: 'safe'}
        ]
      },
      {
        id: 8, 
        url: 'windows-doors',
        showroom: 2,
        title: {
          ru: 'Двери/Окна',
          en: 'Windows/Doors',
          it: 'Finestre/porte'
        }, 
        description: 'Hermitage represents and supplies some of the best Italian brands of windows and doors.'
      },      
      {
        id: 3, 
        url: 'tiles',
        showroom: 1,
        title: {
          ru: 'Плитка/Камень',
          en: 'Tile/Stone',
          it: 'Piastrella/Pietra'
        },
        description: 'Hermitage represents and supplies some of the best Italian tile brands.'
      },
      {
        id: 11, 
        url: 'building-materials',
        showroom: 1,
        title: {
          ru: 'Строительные материалы',
          en: 'Building Materials',
          it: 'Materiali da costruzione'
        }, 
        description: 'Hermitage represents and supplies some of the best Italian brands of building materials.'
      }
    ];
    return items.map((item) => Category.createFrom(item))
  }
}