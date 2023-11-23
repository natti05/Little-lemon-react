import '../assets/../css/form.css';
import { Formik } from 'formik';

function Reservation() {
    
    return (
        <div>
            <h1>Book Now</h1>
     <Formik
       initialValues={{ }}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {props => (
      
         <form className='booking'onSubmit={props.handleSubmit}>
         <label for="res-date">Choose date</label>
         <input type="date" id="date"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.date}
          date="date"
          ></input>
         <label for="res-time">Choose time</label>
         <select id="time "  
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.time}
            time="time">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
         </select>
         <label for="guests">Number of guests</label>
         <input type="number"  onChange={props.handleChange}
             onBlur={props.handleBlur}
            //  value={props.values.number}
             placeholder="1" min="1" max="10" id="guests"></input>
         <label for="occasion">Occasion</label>
         <select id="occasion"  onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.occasion}
             occasion="name">
            <option>Birthday</option>
            <option>Anniversary</option>
         </select>
         {props.errors.date && <div id="feedback">{props.errors.date}</div>}
           <button type="submit">Submit</button>
      </form>
       )}
     </Formik>
   </div>
    );
  }
  
  export default Reservation;