import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { LayoutUI } from './layout.model';
import { Injectable } from '@angular/core';

export interface LayoutState extends EntityState<LayoutUI> {
    ui: {
        screenSize: string;
    }
}

const initialState = {
    ui: {
        screenSize: 'initial'
    }
}
@Injectable()
@StoreConfig({ name: 'layout'})
export class LayoutStore extends EntityStore<LayoutState> {
    /**
     * Layout UI State
     */
    constructor() {
        super(initialState);
        
    }

    updateUI( ui: LayoutUI['ui'] ) {
        this.update(state => ({
          ui: {
            ...state.ui,
            ...ui
          }
        }));
      }
}