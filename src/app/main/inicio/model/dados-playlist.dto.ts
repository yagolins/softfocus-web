import { CoordenadasDto } from './coordenadas.dto';

export class DadosPlaylistDto {

  temperatura:	number;
  playlist:	string[];
  coordenadas:	CoordenadasDto;
  nomeCidade:	string;
  categoria:	string;

  constructor(temperatura:	number, playlist:	string[], coordenadas:	CoordenadasDto, nomeCidade:	string, categoria:	string){
    this.temperatura = temperatura;
    this.playlist = playlist;
    this.coordenadas = coordenadas;
    this.nomeCidade = nomeCidade;
    this.categoria = categoria;
  }
}