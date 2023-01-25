// the first Things is Contacts.  Model comes from Mongoose. Second thing is schema/architecture.
import { model, Schema } from "mongoose";
export default new model()
"Contact",
// What we're workin on here - https://mongoosejs.com/docs/validation.html
new Schema({
  fullName: { type: String, required: true },
  username: {type: string, required: true, unique: true},

      type: String,
      required: true, "Username is required"],
      unique: [true, "Username is already taken"],
      minlength: [3, "Username must be at least 3 characters long"],
      maxLength: [20, "Username must be at most 20 characters long"],
      trim: true,
},

  phrase: String,
  avatar: String,
    type: String,
    default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    validate: { //mpongoose custom validator. return tests this regex and test the incoming url. make sure the URL looks like the URL in the regex}
      validator: (url) => {})
        return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.
        test (
        url;
        );
        // incoming value that is supposed to be a url

  },
  message: (props) => `${props.value} is not a valid URL`,
},
},
})
);

/*

Q: When is a space required in between curly brackets?👆

A: In JavaScript, a space is required in between curly brackets {} when defining an object property. In the code you provided, a space is included before and after the colon in the first object property (fullName), but not in the second object property (username). It is a good practice to include a space before and after the colon for improved readability. So the correct way is fullName: { type: String, required: true }, username: {type: string, required: true, unique: true}
 */