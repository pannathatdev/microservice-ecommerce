import { UnauthorizedException } from "@nestjs/common";

    export const authContext = ({ req }) => {
        if (req.headers?.authorization) {
            return { user: { id : '1'} };
        }
        throw new UnauthorizedException();
 };