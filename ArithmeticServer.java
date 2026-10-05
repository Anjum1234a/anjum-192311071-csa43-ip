import java.io.*;
import java.net.*;

public class ArithmeticServer {
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(5000);

            System.out.println("Server started...");
            System.out.println("Waiting for client...");

            Socket socket = serverSocket.accept();

            System.out.println("Client connected.");

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            double num1 = Double.parseDouble(in.readLine());
            double num2 = Double.parseDouble(in.readLine());
            String operator = in.readLine();

            double result = 0;

            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;

                case "-":
                    result = num1 - num2;
                    break;

                case "*":
                    result = num1 * num2;
                    break;

                case "/":
                    if (num2 != 0)
                        result = num1 / num2;
                    else {
                        out.println("Cannot divide by zero");
                        socket.close();
                        serverSocket.close();
                        return;
                    }
                    break;

                default:
                    out.println("Invalid operator");
                    socket.close();
                    serverSocket.close();
                    return;
            }

            out.println(result);

            socket.close();
            serverSocket.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}