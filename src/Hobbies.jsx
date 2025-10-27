const MyHobbies = () => {
    const hobbies = ["Eating", "Sleeping", "Writing code", "Repeat"]

    return (
        <section>
            <h1>
                My Hobbies
            </h1>
            {hobbies.map(hobby =>
                <ul>
                    <li>
                        {hobby}
                    </li>
                </ul>
            )}
        </section>
    )
}

export default MyHobbies;