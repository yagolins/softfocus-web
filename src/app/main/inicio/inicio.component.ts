import { Component, OnInit, ViewChild } from '@angular/core';
import { InicioService } from './inicio.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DadosPlaylistDto } from './model/dados-playlist.dto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../modal/dialog.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  displayedColumns = ['musica'];

  musicas = new MatTableDataSource<string>();

  dadosPesquisaPlaylistForm!: FormGroup;

  pesquisaPorNome = false;
  pesquisaPorCoordenada = false;

  static PESQUISA_POR_CIDADE = 1;
  static PESQUISA_POR_CCORDENADA = 2;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dadosPlaylist! : DadosPlaylistDto;

  count = 0;

  constructor(private service: InicioService,
    private _formBuilder: FormBuilder,
    private modal: DialogService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.dadosPesquisaPlaylistForm = this._formBuilder.group({
      tipoPesquisa: new FormControl(),
      nomeCidade: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl()
    });
  }

  buscarPorCidade() {
    this.service.listPorCidade(this.dadosPesquisaPlaylistForm.controls['nomeCidade'].value, 
    (success: any) => {
      this.dadosPlaylist = success;
      this.musicas.data = this.dadosPlaylist.playlist;
      this.musicas.paginator = this.paginator;
    },
      (error: any) => {
        const msg = error.error.message;
         this.modal.alert(msg, 'ERRO');
         return error;
      },
      () => {
      });
  }

  buscarPorCoordenadas() {
    this.service.listPorCoordenadas(this.dadosPesquisaPlaylistForm.controls['latitude'].value, 
    this.dadosPesquisaPlaylistForm.controls['longitude'].value, 
    (success: any) => {
      this.dadosPlaylist = success;
      this.musicas.data = this.dadosPlaylist.playlist;
      this.musicas.paginator = this.paginator;
    },
      (error: any) => {
        const msg = error.error.message;
         this.modal.alert(msg, 'ERRO');
         return error;
      },
      () => {
      });
  }

  pesquisar() {
    if(this.dadosPesquisaPlaylistForm.controls['tipoPesquisa'].value == InicioComponent.PESQUISA_POR_CIDADE) {
      this.buscarPorCidade();
    } else {
      this.buscarPorCoordenadas();
    }
    
  }

  updateTipo(value: number) {
    if(value == InicioComponent.PESQUISA_POR_CIDADE) {
      this.pesquisaPorNome = true;
      this.pesquisaPorCoordenada = false;
    } else{
      this.pesquisaPorNome = false;
      this.pesquisaPorCoordenada = true;
    }
  }
  
  limpar() {
    this.dadosPesquisaPlaylistForm.reset();
    this.musicas.data = [];
  }
}
