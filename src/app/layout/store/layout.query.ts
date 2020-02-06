import { QueryEntity } from '@datorama/akita';
import { LayoutState, LayoutStore } from './layout.store';

export class LayoutQuery extends QueryEntity<LayoutState> {
    /**
     * Layout Query
     */
    constructor(protected store: LayoutStore) {
        super(store);
        
    }
}