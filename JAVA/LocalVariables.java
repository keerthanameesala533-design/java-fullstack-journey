import java.util.Scanner;

public class LocalVariables {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First number: ");
        int a = sc.nextInt();
        System.out.println("Enter Second number:");
        int b = sc.nextInt();
        int sum = a + b;
        System.out.println("Sum =" + sum);

    }
}
