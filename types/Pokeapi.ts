export interface RawData {
  count: number;
  next: string;
  previous: null | string;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  name: string;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface PokemonTypes {
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface PokemonType {
  pokemon: [
    {
      pokemon: {
        name: string;
        url: string;
      }
    }
  ]
}
