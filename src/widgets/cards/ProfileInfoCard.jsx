import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import React from "react";

export function ProfileInfoCard({ title, description, details, action, isInEditMode, setBirthDate }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="mx-0 mt-0 mb-4 flex items-center justify-between gap-4"
      >
        <Typography variant="h6" className="text-surface-light">
          {title}
        </Typography>
        {action}
      </CardHeader>
      <CardBody className="p-0">
        {description && (
          <> {isInEditMode ? <Textarea
            value={description}
          /> : <Typography
              variant="small"
              className="font-normal text-surface-light"
            >
              {description}
            </Typography>
          }
          </>
        )}
        {description && details ? (
          <hr className="my-8 border-surface-mid" />
        ) : null}
        {details && (
          <ul className="flex flex-col gap-4 p-0">
            {Object.keys(details).map((el, key) => (
              <li key={key} className={`flex items-center gap-4`}>
                <Typography
                  variant="small"
                  className="font-semibold capitalize text-surface-light"
                >
                  {el}:
                </Typography>
                {typeof details[el] === "string" || details[el] == null ? (
                  <>
                    {!isInEditMode ? <Typography
                      variant="small"
                      className="font-normal text-surface-mid-light"
                    >
                      {details[el] || "N/A"}
                    </Typography> : <>
                      {el === "birthday" ? <>
                          <Input type="date"
                                 value={details[el]}
                                 onChange={e => setBirthDate(e.target.value)}
                                 placeholder="Select Date" />
                        </> : <Input value={details[el]} onChange={() => {}}/>}
                    </>}
                  </>) : (
                  details[el]
                )}
              </li>
            ))}
          </ul>
        )}
      </CardBody>
    </Card>
  );
}

ProfileInfoCard.defaultProps = {
  action: null,
  description: null,
  details: {},
};

ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  details: PropTypes.object,
};

ProfileInfoCard.displayName = "/src/widgets/cards/profile-info-card.jsx";

export default ProfileInfoCard;
