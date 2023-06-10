import style from './NewProducts.module.scss'

export default function NewProducts ({newProducts}){
  return(
    <section className={style.section}>
      <div className={style.sectionGrid}>
        {newProducts?.length > 0 ? 
        newProducts.map(newProduct => (
        <div key={newProduct.id}>{newProduct.title}</div>)) 
        : null}
    </div>
    </section>
  )
}