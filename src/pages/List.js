// import { Provider } from 'react-redux';
import { Card } from './Card';

export const List = ({ productlist, deletefn }) => {
    return (
        <div>
            {productlist.map(product => {
                return (
                    // <Provider /*store={store}*/>
                    <Card 
                        key={product.id} 
                        data={product} 
                        deletecard={deletefn} 
                    />
                    // </Provider>
                );
            })}
        </div>
    );
};
