import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { HttpModule } from '@nestjs/axios';
describe('PokemonService', () => {
  let pokemonService: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[HttpModule],
      providers: [PokemonService],
    }).compile();

    pokemonService = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(pokemonService).toBeDefined();
  });

  it("get a pokemon",()=>{
    let id=1;
    let pokemonName=pokemonService.getPokemon(id);
    expect(pokemonName).toBe("bulbasaur");
  })
});
