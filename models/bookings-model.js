const model = {}; 

model.buildReadQuery = (id) => {
  let table = `(((((bookings LEFT JOIN vehicles ON bookings.VEHICLE_ID = vehicles.VEHICLE_ID) 
      LEFT JOIN customers ON bookings.CUST_ID = customers.CUST_ID) 
      LEFT JOIN employees AS salesperson ON bookings.EMP_ID = salesperson.EMP_ID)
      LEFT JOIN users uc ON uc.USER_ID = customers.USER_ID)
      LEFT JOIN users ue on ue.USER_ID = salesperson.USER_ID)`;
  let fields = "BOOKING_ID, MAKE, MODEL,COLOUR, MODELYEAR,PRICE, DATEBOOKED, bookings.EMP_ID AS S_ID, CONCAT(ue.FIRSTNAME,' ', ue.LASTNAME) AS Salesperson, bookings.CUST_ID AS C_ID, CONCAT(uc.FIRSTNAME,' ', uc.LASTNAME) AS Customer";
  let sql = `SELECT ${fields} FROM ${table}`;
  if (id) sql += ` WHERE BOOKING_ID=:ID`;
  return { sql: sql, data: { ID: id } };
};


export default model;