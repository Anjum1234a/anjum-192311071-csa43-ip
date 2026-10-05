import java.io.*;
import java.net.*;
import java.util.*;

public class ArithmeticClient {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 5000);

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            Scanner sc = new Scanner(System.in);

            System.out.print("Enter first number: ");
            double num1 = sc.nextDouble();

            System.out.print("Enter second number: ");
            double num2 = sc.nextDouble();

            System.out.print("Enter operator (+, -, *, /): ");
            String operator = sc.next();

            out.println(num1);
            out.println(num2);
            out.println(operator);

            String result = in.readLine();

            System.out.println("Result = " + result);

            socket.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}