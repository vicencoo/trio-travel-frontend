import { Input } from "@/components/input";
import type { LoginDataProps } from "./types";
import { Text } from "@/components/text";

export const LoginForm = ({
  loginData,
  handleAuthDataChange,
  error,
}: LoginDataProps) => {
  return (
    <div className="flex flex-col gap-3">
      {error.wrongCredentials && (
        <div className="flex w-full justify-center">
          <Text
            text={error.wrongCredentials}
            size="text-sm"
            font="font-semibold"
            className="text-red-600"
          />
        </div>
      )}
      <Input
        label="Email"
        labelColor="text-gray-500"
        type="email"
        value={loginData.email}
        onChange={(e) => handleAuthDataChange("login", "email", e.target.value)}
        errorMessage={error.email}
      />
      <Input
        label="Password"
        labelColor="text-gray-500"
        isPassword
        value={loginData.password}
        onChange={(e) =>
          handleAuthDataChange("login", "password", e.target.value)
        }
        errorMessage={error.password}
      />
    </div>
  );
};
