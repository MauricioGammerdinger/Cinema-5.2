import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { FilmesComponent } from "./filmes/filmes.component";
import { MainComponent } from "./main/main.component";
import { ListaComponent } from "./lista/lista.component";
import { TerrorComponent } from "./lista/terror/terror.component";
import { ComediaComponent } from "./lista/comedia/comedia.component";
import { AcaoComponent } from "./lista/acao/acao.component";

export const ROUTES: Routes = [
    {path: '', component: MainComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'filmes/:id', component: FilmesComponent},
    {path: 'sobre', component: AboutComponent},
    {path: 'lista', component: ListaComponent},
    {path: 'comedia', component: ComediaComponent},
    {path: 'acao', component: AcaoComponent},
    {path: 'terror', component: TerrorComponent}

];