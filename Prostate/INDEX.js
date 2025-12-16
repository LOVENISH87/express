async function createUser() {
    const rest = await pool.query(
        "INSERT INTO student (name, age, city) VALUES ($1, $2, $3) RETUENING *",
        ['Robin' , 34, 'gotham']
    )
    console.log("student inserted", rest.rows[0]);

}

async function readUser() {
    const rest = await pool.query(
        "select * from student"
    )
    console.log("All students" , rest.rows)
}

async function updateUser() {
    const rest = await pool.query(
        'UPDATE users set name = $1 where id = $2',
        ['testStudent', 1]
    )
}

async function deleteStudent() {
    const rest = await pool.query(
        'DELETE FORM student where id=$1'
    )
    console.log("studnet deleted" , rows[0]);
    
}

async function main() {
    await createUser();
    await readUser();
    await updateUser();
    await deleteStudent();
    pool.end();
}