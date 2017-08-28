/**
 * Creating a component registry file to expose component list.
 * [TODO]: Other ways of getting list of components availabl.
 */
import { RandomizerComponent } from './randomizer/randomizer.component';
import { ShowSiblingsDataComponent } from './show-siblings-data/show-siblings-data.component';

export const RegisteredComponent = {
    RandomizerComponent,
    ShowSiblingsDataComponent
}