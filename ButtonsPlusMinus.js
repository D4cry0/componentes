

const updateProduct = ( event ) => {
        
    // Always use currentTarget
    const [ index, op ] = event.currentTarget.id.split( '-' );
    
    const item = cartList.fields[index];
    
    const sum = item.qtyToBuy.value + ( op === 'plus' ? 1 : -1 );
    
    item.qtyToBuy.onChange( 
        ( sum >= item.inventoryQty.value ) 
        ? item.inventoryQty.value
        : ( sum <= 0 ? 1 : sum ) 
        );
        
        cash.onChange( {} );
        credit.onChange( {} );
        setUpdating( true );
}


<ButtonGroup segmented>
    <Button id={ index+'-minus' } size='slim' onClick={ updateProduct } outline>-</Button>
    <Button size='slim' outline disabled>{ qtyToBuy.value }</Button>
    <Button id={ index+'-plus' } size='slim' onClick={ updateProduct } outline>+</Button>
</ButtonGroup>