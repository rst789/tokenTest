function tokenizeV3() {
    const token = jwt.sign({
            "sub": "1234567890",
            "name": "John Doe",
            "iat": 1662666373
        },
        "pvtKey123123",
        {algorithm: "HS512"},
    );
    console.log(token);
}
import jwt from "jsonwebtoken";
